"use server";
import { Post, User } from "./models";
import { connectionDb } from "./utils";
import { NextResponse } from "next/server";
import bcrypt from "bcryptjs";
export const addPost = async (formData) => {
  // "use server";

  const { title, desc, slug, userId } = Object.fromEntries(formData);
  console.log(title, desc, slug, userId)

  try {
    connectionDb()
    const post = new Post({
      title,
      desc,
      slug,
      userId
    })

    await post.save()
    console.log('saved post')
  } catch (e) {
    console.log(e)
  }
}

export const deletePost = async (formData) => {
  // "use server";

  const { id } = Object.fromEntries(formData);


  try {
    connectionDb()

    await Post.findByIdAndDelete(id)
    console.log('delete post')
  } catch (e) {
    console.log(e)
  }
}


export const register = async (previousState, formData) => {
  const { username, email, password, img, passwordRepeat } =
    Object.fromEntries(formData);

  if (password !== passwordRepeat) {
    return { error: "Passwords do not match" };
  }

  try {
    connectionDb();

    const user = await User.findOne({ username });

    if (user) {
      return { error: "Username already exists" };
    }

    const salt = await bcrypt.genSalt(10);
    const hashedPassword = await bcrypt.hash(password, salt);

    const newUser = new User({
      username,
      email,
      password: hashedPassword,
      img,
    });

    await newUser.save();
    console.log("saved to db");

    return { success: true };
  } catch (err) {
    console.log(err);
    return { error: "Something went wrong!" };
  }
};


export const login = async (prevState, formData) => {
  const { username, password } = Object.fromEntries(formData);
  // console.log(username)
  try {
    connectionDb()
    let findUser = await User.findOne({ username })
    if(findUser)
    {
    NextResponse.json(findUser)
    }
  } catch (err) {
    console.log(err);

    if (err.message.includes("CredentialsSignin")) {
      return { error: "Invalid username or password" };
    }
    throw err;
  }
};