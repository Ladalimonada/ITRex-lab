// /* eslint-disable camelcase */
// import React from 'react';
// import { Provider } from 'react-redux';
// import configureStore from 'redux-mock-store';
// import thunk from 'redux-thunk';
// import {
//   render, waitFor, screen,
// } from '@testing-library/react';
// import userEvent from '@testing-library/user-event';
// import '@testing-library/jest-dom';
// import { BrowserRouter } from 'react-router-dom';
// import { SignInForm } from '../components';
// import { DICTIONARY } from '../../../shared/dictionary';

// describe('SignInForm ', () => {
//   const middlewares = [thunk];
//   const mockStore = configureStore(middlewares);

//   it('should be rendered and submitted with correct data', async () => {
//     // Arrange
//     const handleSubmit = jest.fn();
//     const store = mockStore({});

//     render(
//       <Provider store={store}>
//         <BrowserRouter>
//           <SignInForm />
//         </BrowserRouter>
//       </Provider>,
//     );

//     // Act
//     const form = (screen.getByTestId('signInForm'));
//     form.onsubmit = handleSubmit;
//     userEvent.type
// (screen.getByPlaceholderText(DICTIONARY.authForm.email),
// 'john.dee@someemail.com');
//     userEvent.type(screen.getByPlaceholderText(DICTIONARY.authForm.password), 'Test11234');
//     userEvent.click(screen.getByRole('button'));

//     // Assert
//     await waitFor(() => expect(handleSubmit).toHaveBeenCalledWith({
//       email: 'john.dee@someemail.com',
//       password: 'Test11234',
//     }));
//   });
// });
