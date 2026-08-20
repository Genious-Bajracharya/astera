/* eslint-disable @typescript-eslint/no-explicit-any */

import axios from "axios";
import Cookies from "js-cookie";

const token = Cookies.get("authtoken");
const API_URL = process.env.NEXT_PUBLIC_API_URL;

const apiClient = axios.create({
  baseURL: API_URL,
  headers: {
    "Content-Type": "application/json",
    Authorization: `Bearer ${token}`,
  },
  // timeout: 15000,
});

// -------- Career --------
export const CreateCareer = async (formData: any) => {
  const data = await apiClient.post("/careers", formData);
  return data.data;
};

export const GetCareers = async () => {
  const { data } = await apiClient.get("/careers");
  return data;
};

export const GetCareer = async (id: string) => {
  const data = await apiClient.get(`/careers/${id}`);
  return data;
};

// -------- Buy --------
export const GetBuys = async (query = "") => {
  const { data } = await apiClient.get(`/buy?${query}`);
  return data;
};

export const GetBuy = async (id: string) => {
  const data = await apiClient.get(`/buy/${id}`);
  return data;
};

export const GetBuyBySlug = async (slug: string) => {
  const { data } = await apiClient.get(`/buy/slug/${slug}`);
  return data;
};

// -------- Blogs --------
export const GetBlogs = async () => {
  const { data } = await apiClient.get(`/blogs`);
  return data;
};

export const GetBlog = async (id: string) => {
  const data = await apiClient.get(`/blogs/${id}`);
  return data;
};
export const GetBlogBySlug = async (slug: string) => {
  const { data } = await apiClient.get(`/blogs/slug/${slug}`);
  return data;
};



// -------- Offplan --------
export const GetOffplans = async (query = "") => {
  const { data } = await apiClient.get(`/offplan?${query}`);
  return data;
};

export const GetOffplan = async (id: string) => {
  const data = await apiClient.get(`/offplan/${id}`);
  return data;
};

export const GetOffplanBySlug = async (slug: string) => {
  const { data } = await apiClient.get(`/offplan/slug/${slug}`);
  return data;
};

// -------- Admin --------
export const Login = async (formData: any) => {
  const data = await apiClient.post("/user/login", formData);
  return data;
};

// -------- Admin Buy --------
export const CreateBuy = async (formData: any) => {
  const data = await apiClient.post("/buy", formData);
  return data.data;
};

export const DeleteBuy = async (id: any) => {
  const data = await apiClient.delete(`/buy/${id}`);
  return data;
};

export const UpdateBuy = async (id: string, updatedData: any) => {
  return await apiClient.put(`/buy/${id}`, updatedData);
};
export const GetFeaturedBuy = async () => {
  const { data } = await apiClient.get("/buy/featured");
  return data;
};

// -------- Admin Offplan --------
export const CreateOffplan = async (formData: any) => {
  const data = await apiClient.post("/offplan", formData);
  return data.data;
};

export const DeleteOffplan = async (id: any) => {
  const data = await apiClient.delete(`/offplan/${id}`);
  return data;
};

export const UpdateOffplan = async (id: any, payload: any) => {
  const data = await apiClient.put(`/offplan/${id}`, payload);
  return data;
};

export const GetFeaturedOffplan = async () => {
  const { data } = await apiClient.get("/offplan/featured");
  return data;
};

// -------- Admin Career --------
export const UpdateCareer = async (id: any, payload: any) => {
  const data = await apiClient.put(`/careers/${id}`, payload);
  return data;
};

export const DeleteCareer = async (id: any) => {
  const data = await apiClient.delete(`/careers/${id}`);
  return data;
};

// -------- Admin Blog --------
export const CreateBlog = async (payload: any) => {
  const data = await apiClient.post("/blogs", payload);
  return data;
};

export const DeleteBlog = async (id: string) => {
  const data = await apiClient.delete(`/blogs/${id}`);
  return data;
};

export const UpdateBlog = async (id: string, payload: any) => {
  const res = await apiClient.put(`/blogs/${id}`, payload);
  return res.data;
};

export const GetTeam = async () => {
  const { data } = await apiClient.get("/team");
  return data;
};

export const CreateTeamMember = async (formData: any) => {
  const { data } = await apiClient.post("/team", formData);
  return data;
};

export const ChangePassword = async ({
  currentPassword,
  newPassword,
}: {
  currentPassword: string;
  newPassword: string;
}) => {
  return await apiClient.post("/admin/changepassword", {
    currentPassword,
    newPassword,
  });
};
