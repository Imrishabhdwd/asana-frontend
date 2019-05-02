import React from "react";
// App constants
class Constant {
  ROUTES = [
    {
      name: "Home",
      path: "/home"
    },
    {
      name: "About Us",
      path: "/about-us"
    },
    {
      name: "Services",
      path: "/services"
    },
    {
      name: "Testimonial",
      path: "/testimonial"
    },
    {
      name: "Blog",
      path: "/blog"
    },
    {
      name: "Contact us",
      path: "/contact-us"
    }
  ];


 
  FOOTERS = [
    {
      name: "Home",
      path: "/home"
    },
    {
      name: "About us",
      path: "/about-us"
    },
    {
      name: "Services",
      path: "/services"
    },
    {
      name: "Testimonial",
      path: "/testimonial"
    },
    {
      name: "Blog",
      path: "/blog"
    },
    {
      name: "Contact",
      path: "/contact-us"
    }
  ];
  ADD_USER = "ADD_USER"
  GET_USER = "GET_USER"
  ADD_ADMIN = "ADD_ADMIN"
  GET_ADMIN = "GET_ADMIN"
  CARD_DETAIL = [
    {
      cardTitle: "card1",
      cardSubtitle: "sub1",
      cardMessage: "New card Generated"
    },
    {
      cardTitle: "card2",
      cardSubtitle: "sub2",
      cardMessage: "New card Generated"
    },
    {
      cardTitle: "card3",
      cardSubtitle: "sub3",
      cardMessage: "New card Generated"
    },
    {
      cardTitle: "card4",
      cardSubtitle: "sub4",
      cardMessage: "New card Generated"
    },
    {
      cardTitle: "card5",
      cardSubtitle: "sub5",
      cardMessage: "New card Generated"
    }
  ]
  status = [
    "initial", "in progress", "resolved", "closed"
  ]
}
export default Constant;