import { useEffect, useState, useMemo } from 'react';
import {
  Table,
  Header,
  HeaderRow,
  Body,
  Row,
  HeaderCell,
  Cell,
} from '@table-library/react-table-library/table';
import { useTheme } from '@table-library/react-table-library/theme';
import { usePagination } from '@table-library/react-table-library/pagination';
import { useFetch } from '../../hooks';
import { formatDate } from '../../helper';
import { UserType } from './UserList.type';
import {
  Action,
  MiddlewareFunction,
  State,
} from '@table-library/react-table-library/types/common';
import styles from './UserList.module.scss';
import StatusLabel from '../StatusLabel';
import { Icon, Icons } from '../../uikit';
import Menu from '../Menu';
import { useNavigate } from 'react-router-dom';

const LOCAL_STORAGE_KEY = 'userListData';

const UserList = () => {
  const [page, setPage] = useState(0);
  const [pageLimit, setPageLimit] = useState(10);
  const [localData, setLocalData] = useState<UserType[] | null>(() => {
    const storedData = window.localStorage.getItem(LOCAL_STORAGE_KEY);
    return storedData ? JSON.parse(storedData) : null;
  });

  const [loading, setLoading] = useState(true);
  const [shouldFetch, setShouldFetch] = useState(false);

  const navigate = useNavigate();

  const reqOptions = useMemo(
    () => ({
      method: 'GET',
      headers: {
        Authorization: `Bearer ${
          import.meta.env.VITE_JSON_GENERATOR_ACCESS_TOKEN
        }`,
        'Content-Type': 'application/json',
      },
    }),
    []
  );

  const url = shouldFetch
    ? `https://api.json-generator.com/templates/tMQ7twPIokmN/data`
    : null;

  const { data, error } = useFetch<UserType[]>(url, reqOptions);

  const theme = useTheme({
    Table: `
      --data-table-library_grid-template-columns: 150px repeat(2, minmax(200px, 1fr)) 120px repeat(2, minmax(200px, 1fr)) 60px;
      width: 100%;
      padding: 30px;
      border: 1px solid #213f7d26;
      background-color: #fff;

      @media (max-width: 992px) {
        padding: 20px;
      }

      tr {
        &:is(:first-of-type) {
          td {
            border-top: none;
            padding-top: 36px;
            }
        }
      }
    `,
    Row: `
      .td {
        border-top: 1px solid #213f7d26;
        padding: 21px 0 23px 0 ;
      }
    `,
    HeaderCell: `
      text-transform: uppercase;
      font-size: 12px;
      font-weight: 600;

      @media (max-width: 768px) {
        font-size: 14px;
      }
    `,
    Cell: `
      font-size: 14px;

      @media (max-width: 768px) {
        font-size: 16px;
      }
    `,
  });

  const nodes = useMemo(
    () =>
      localData?.map(user => {
        const { id, status, personal, employment, socials, dateJoined } = user;
        const { name, phone } = personal;
        const { organization } = employment;
        const { workMail } = socials;
        return { id, status, name, organization, phone, workMail, dateJoined };
      }) || [],
    [localData]
  );

  const pagination = usePagination(
    { nodes },
    {
      state: {
        page: page,
        size: pageLimit,
      },
      onChange: onPaginationChange,
    }
  );

  function onPaginationChange(
    _action: Action,
    state: State
  ): MiddlewareFunction | void {
    setPage(state.page);
  }

  useEffect(() => {
    if (localData === null) {
      setShouldFetch(true);
    } else {
      setLoading(false);
    }
  }, [localData]);

  useEffect(() => {
    if (data) {
      window.localStorage.setItem(LOCAL_STORAGE_KEY, JSON.stringify(data));
      setLocalData(data);
      setLoading(false);
    }
  }, [data]);

  if (loading) return <div>Loading...</div>;
  if (error) return <div>Error: {error.message}</div>;
  if (!localData) return <div>No data</div>;

  const tableData = { nodes };

  return (
    <>
      <Table
        data={tableData}
        pagination={pagination}
        theme={theme}
        layout={{
          custom: true,
          horizontalScroll: true,
        }}
      >
        {(tableList: typeof nodes) => (
          <>
            <Header>
              <HeaderRow>
                <HeaderCell>Organization</HeaderCell>
                <HeaderCell>Username</HeaderCell>
                <HeaderCell>Email</HeaderCell>
                <HeaderCell>Phone Number</HeaderCell>
                <HeaderCell>Date Joined</HeaderCell>
                <HeaderCell>Status</HeaderCell>
                <HeaderCell></HeaderCell>
              </HeaderRow>
            </Header>

            <Body>
              {tableList?.map(item => (
                <Row key={item.id} item={item}>
                  <Cell>{item.organization}</Cell>
                  <Cell>{item.name}</Cell>
                  <Cell>{item.workMail}</Cell>
                  <Cell>{item.phone}</Cell>
                  <Cell>{formatDate(item.dateJoined)}</Cell>
                  <Cell>
                    <StatusLabel>{item.status}</StatusLabel>
                  </Cell>
                  <Cell
                    className={styles.menuCell}
                    //
                  >
                    <Menu
                      willUseParentPosition
                      anchor="left"
                      options={[
                        {
                          label: 'view Details',
                          icon: <Icon src={Icons.EyeLine} />,
                          onClick: () => navigate(`/users/${item.id}`),
                        },
                        {
                          label: 'Blacklist user',
                          icon: <Icon src={Icons.UserTimes} />,
                          onClick: () => {},
                        },
                        {
                          label: 'Activate user',
                          icon: <Icon src={Icons.UserCheck} />,
                          onClick: () => {},
                        },
                      ]}
                    >
                      <Icon src={Icons.ThreeDots} width="20px" />
                    </Menu>
                  </Cell>
                </Row>
              ))}
            </Body>
          </>
        )}
      </Table>
      {localData.length > 0 && (
        <div className={styles.tableNavWrap}>
          <div>
            <span>Showing</span>
            <select
              id="limit-select"
              className={styles.select}
              value={pageLimit}
              onChange={event => {
                const nextValue = parseInt(event.target.value);
                setPageLimit(nextValue);
              }}
            >
              <option value="10">10</option>
              <option value="20">20</option>
              <option value="50">50</option>
              <option value="100">100</option>
              <option value={localData.length}>All</option>
            </select>
            <span> out of {localData.length}</span>
          </div>
          <div>
            {[
              {
                label: '<',
                type: 'step',
                onClick: () =>
                  pagination.fns.onSetPage(pagination.state.page - 1),
              },
              {
                label: 1,
                type: 'page',
                onClick: () => pagination.fns.onSetPage(0),
              },
              {
                label: 2,
                type: 'page',
                onClick: () => pagination.fns.onSetPage(1),
              },
              {
                label: 3,
                type: 'page',
                onClick: () => pagination.fns.onSetPage(2),
              },
              {
                label: '...',
                type: 'page',
                onClick: () => {},
              },
              {
                label: Math.ceil(localData.length / pageLimit) - 1,
                type: 'page',
                onClick: () =>
                  pagination.fns.onSetPage(
                    Math.ceil(localData.length / pageLimit) - 2
                  ),
              },
              {
                label: Math.ceil(localData.length / pageLimit),
                type: 'page',
                onClick: () =>
                  pagination.fns.onSetPage(
                    Math.ceil(localData.length / pageLimit) - 1
                  ),
              },
              {
                label: '>',
                type: 'step',
                onClick: () =>
                  pagination.fns.onSetPage(pagination.state.page + 1),
              },
            ].map(({ label, type, onClick }, index) => {
              return (
                <button
                  key={index}
                  type="button"
                  className={
                    type === 'step' ? styles.stepButtons : styles.pageButtons
                  }
                  disabled={
                    (type === 'step' &&
                      pagination.state.page === 0 &&
                      label === '<') ||
                    (type === 'step' &&
                      pagination.state.page ===
                        Math.ceil(localData.length / pageLimit) - 1 &&
                      label === '>') ||
                    (type === 'page' &&
                      pagination.state.page === 0 &&
                      label === 1) ||
                    (type === 'page' &&
                      pagination.state.page === 1 &&
                      label === 2) ||
                    (type === 'page' &&
                      pagination.state.page === 2 &&
                      label === 3) ||
                    (type === 'page' &&
                      pagination.state.page ===
                        Math.ceil(localData.length / pageLimit) - 2 &&
                      label === Math.ceil(localData.length / pageLimit) - 1) ||
                    (type === 'page' &&
                      pagination.state.page ===
                        Math.ceil(localData.length / pageLimit) - 1 &&
                      label === Math.ceil(localData.length / pageLimit))
                  }
                  onClick={onClick}
                >
                  {label}
                </button>
              );
            })}
          </div>
        </div>
      )}
    </>
  );
};

export default UserList;
