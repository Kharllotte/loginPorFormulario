import { Router } from "express";
import passport from "passport";

const authRouterView = Router();

const layout = "logout";

authRouterView.get("/login", async (req, res) => {
  return res.render("login", {
    layout,
  });
});

authRouterView.post(
  "/login",
  passport.authenticate("login", {
    failureRedirect: "/auth/login",
    successRedirect: "/products",
  })
);

authRouterView.get("/signup", async (req, res) => {
  return res.render("signup", {
    layout,
  });
});

authRouterView.post(
  "/signup",
  passport.authenticate("signup", {
    failureRedirect: "/auth/register",
    successRedirect: "/products",
  })
);

authRouterView.get("/logout", (req, res) => {
  req.session.destroy();
	res.redirect('/auth/login');
});

export default authRouterView;
