import React from 'react';
import ReactDOM from 'react-dom/client';
import {BrowserRouter, Routes, Route} from 'react-router-dom';
import { AppProvider } from './context.';
import './index.css';
import Home from './pages/Home/Home';
import About from "./pages/About/About";
import BookList from "./components/BookList/BookList";
import BookDetails from "./components/BookDetails/BookDetails";
import App from "./loginApp"
import History from './pages/History/History';
const root = ReactDOM.createRoot(document.getElementById('root'));

root.render(
  <AppProvider>
    <BrowserRouter>
      <Routes>
          
          <Route path = "/"  element = {<App />}/>
          <Route path = "/home" element = {<Home />}>
          <Route path = "about" element = {<About />} />
          <Route path = "book/:id" element = {<BookDetails />} />
          <Route exact path = "book" element = {<BookList />} />

          </Route>

          <Route path='history' element={<History/>}/>
      </Routes>
    </BrowserRouter>
  </AppProvider>
);

