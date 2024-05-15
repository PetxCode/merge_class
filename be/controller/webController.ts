import { Request, Response } from "express";
import webModel from "../model/webModel";

export const getDefault = (req: Request, res: Response) => {
  try {
    return res.status(200).json({
      message: "get default request",
      status: 200,
    });
  } catch (error) {
    return res.status(404).json({
      message: "Error",
      status: 404,
    });
  }
};

export const getWebData = async (
  req: Request,
  res: Response
): Promise<Response> => {
  try {
    const getAll = await webModel.find();

    return res.status(200).json({
      message: "get all data",
      data: getAll,
      status: 200,
    });
  } catch (error) {
    return res.status(404).json({
      message: "Error",
      status: 404,
    });
  }
};

export const getWebDataBySearch = async (
  req: Request,
  res: Response
): Promise<Response> => {
  try {
    const { category } = req.query;

    const getAll = await webModel.find({ category });

    return res.status(200).json({
      message: "get all data",
      data: getAll,
      status: 200,
    });
  } catch (error) {
    return res.status(404).json({
      message: "Error",
      status: 404,
    });
  }
};

export const createWebData = async (
  req: Request,
  res: Response
): Promise<Response> => {
  try {
    const { readTime, title, image, category } = req.body;
    const getAll = await webModel.create({ readTime, title, image, category });

    return res.status(201).json({
      message: "data created successfully",
      data: getAll,
      status: 201,
    });
  } catch (error) {
    return res.status(404).json({
      message: "Error",
      status: 404,
    });
  }
};

export const updateWebData = async (
  req: Request,
  res: Response
): Promise<Response> => {
  try {
    const { ID } = req.params;
    const { image } = req.body;
    const getAll = await webModel.findByIdAndUpdate(
      ID,
      { image },
      { new: true }
    );

    return res.status(201).json({
      message: "data updated successfully",
      data: getAll,
      status: 201,
    });
  } catch (error) {
    return res.status(404).json({
      message: "Error",
      status: 404,
    });
  }
};

export const updateWebDataLike = async (
  req: Request,
  res: Response
): Promise<Response> => {
  try {
    const { ID } = req.params;

    const model: any = await webModel.findById(ID);
    const value = Math.floor(Math.random() * Date.now()).toString();

    const getAll = await webModel.findByIdAndUpdate(
      ID,
      {
        likes: [...model?.likes, value],
      },
      { new: true }
    );

    return res.status(201).json({
      message: "data updated successfully",
      data: getAll,
      status: 201,
    });
  } catch (error) {
    return res.status(404).json({
      message: "Error",
      status: 404,
    });
  }
};
