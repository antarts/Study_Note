import bcrypt from 'bcrypt';
import config from '../config';
import PostModel from '../models/post';
import marked from 'marked';

export const homePage = function(req, res, next) {
  res.render('index', {title: 'iwhyer posts'});
};

export const postsPage = function(req, res, next) {
  res.render('posts', { title: '我的文章' });
};

export const createPage = function(req, res, next) {
  res.render('create');
};

export const editPage = function(req, res, next) {
  const { id } = req.query;

  res.render('edit', { id });
};

export const showPage = function(req, res, next) {
  const { id } = req.query;

  PostModel.findOne({ _id: id }, function(err, post) {
    post.mkContent = marked(post.content);
    res.render('show', { post });
  });
};

export const signupPage = function(req, res, next) {
  res.render('signup');
};

export const signinPage = function(req, res, next) {
  res.render('signin');
};

export const signoutPage = function(req, res, next) {
  res.clearCookie(config.cookieName, { path: '/' });
  res.redirect('/');
};