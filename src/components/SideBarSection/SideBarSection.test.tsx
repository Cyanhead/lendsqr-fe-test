import { describe, expect, it } from 'vitest';
import { render, screen } from '@testing-library/react';
import SideBarSection from './SideBarSection';
import { Icons } from '../../uikit';
import { BrowserRouter } from 'react-router-dom';

const renderWithRouter = (ui: React.ReactElement, { route = '/' } = {}) => {
  window.history.pushState({}, 'Test page', route);

  return render(ui, { wrapper: BrowserRouter });
};

describe('SideBarSection', () => {
  it('should render', () => {
    // Arrange
    renderWithRouter(
      <SideBarSection
        title="Test Section"
        options={[
          { name: 'test option 1', icon: Icons.Home },
          { name: 'test option 2', icon: Icons.Home },
          { name: 'test option 3', icon: Icons.Home },
        ]}
      />
    );

    // Act
    const sideBarSectionElem = screen.getByText('Test Section');
    const sideBarSectionButtonElems = screen.getAllByText(/Test option/i);

    // Assert
    expect(sideBarSectionElem).toBeInTheDocument();
    expect(sideBarSectionButtonElems).toHaveLength(3);
  });
});
