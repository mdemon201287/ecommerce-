import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import { Container } from 'react-bootstrap';
import { Provider } from 'react-redux';
import Header from './components/Header';
import Footer from './components/Footer';
import HomeScreen from './screens/HomeScreen';
import ProductScreen from './screens/ProductScreen';
import CartScreen from './screens/CartScreen';
import store from './store';
import LoginScreen from './screens/LoginScreen';
import RegisterScreen from './screens/RegisterScreen';
import { CartProvider } from './context/CartContext';

function App() {
    return (
        <Provider store={store}>
            <CartProvider>
                <Router>
                    <Header />
                    <main className="py-3">
                        <Container>
                            <Routes>
                                <Route path="/" element={<HomeScreen />} />
                                <Route path="/product/:id" element={<ProductScreen />} />
                                <Route path="/cart/:id?" element={<CartScreen />} />
                                <Route path="/login" element={<LoginScreen />} />
                                <Route path="/register" element={<RegisterScreen />} />
                            </Routes>
                        </Container>
                    </main>
                    <Footer />
                </Router>
            </CartProvider>
        </Provider>
    );
}

export default App;
