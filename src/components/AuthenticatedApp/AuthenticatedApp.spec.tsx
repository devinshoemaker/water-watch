import { IonReactRouter } from '@ionic/react-router';
import { render } from '@testing-library/react';
import React from 'react';
import { MemoryRouter } from 'react-router';
import { CapacitorRoutes, WebRoutes } from './AuthenticatedApp';

describe('CapacitorRoutes', () => {
  it('should render without crashing', () => {
    render(
      <IonReactRouter>
        <CapacitorRoutes />
      </IonReactRouter>
    );
  });

  it('should render Home when path is /', () => {
    const { getByText } = render(
      <MemoryRouter initialEntries={['/home']}>
        <CapacitorRoutes />
      </MemoryRouter>
    );

    expect(getByText('Ionic Blank')).toBeTruthy();
  });

  it('should render Home when path is /home', () => {
    const { getByText } = render(
      <MemoryRouter initialEntries={['/home']}>
        <CapacitorRoutes />
      </MemoryRouter>
    );

    expect(getByText('Ionic Blank')).toBeTruthy();
  });

  it('should render Settings when path is /settings', () => {
    const { getByText } = render(
      <MemoryRouter initialEntries={['/settings']}>
        <CapacitorRoutes />
      </MemoryRouter>
    );

    expect(getByText('Log out')).toBeTruthy();
  });

  it('should not render when path does not match', () => {
    const { container } = render(
      <MemoryRouter initialEntries={['/no-match']}>
        <CapacitorRoutes />
      </MemoryRouter>
    );

    expect(container.children.length).toBe(1);
    expect(container.children[0].children.length).toBe(0);
  });
});

describe('WebRoutes', () => {
  it('should render without crashing', () => {
    render(
      <IonReactRouter>
        <WebRoutes />
      </IonReactRouter>
    );
  });

  it('should render Home when path is /', () => {
    const { getByText } = render(
      <MemoryRouter initialEntries={['/home']}>
        <WebRoutes />
      </MemoryRouter>
    );

    expect(getByText('Ionic Blank')).toBeTruthy();
  });

  it('should render Home when path is /home', () => {
    const { getByText } = render(
      <MemoryRouter initialEntries={['/home']}>
        <WebRoutes />
      </MemoryRouter>
    );

    expect(getByText('Ionic Blank')).toBeTruthy();
  });

  it('should render Settings when path is /settings', () => {
    const { getByText } = render(
      <MemoryRouter initialEntries={['/settings']}>
        <WebRoutes />
      </MemoryRouter>
    );

    expect(getByText('Log out')).toBeTruthy();
  });

  it('should not render when path does not match', () => {
    const { getByText } = render(
      <MemoryRouter initialEntries={['/no-match']}>
        <WebRoutes />
      </MemoryRouter>
    );

    expect(getByText('Ionic Blank')).toBeTruthy();
  });
});
