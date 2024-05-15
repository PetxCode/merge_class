import { Request, Response } from "express";
import webModel from "../model/webModel";
import bookMarkModel from "../model/bookMark";

export const getBookMarkData = async (
  req: Request,
  res: Response
): Promise<Response> => {
  try {
    const getAll = await bookMarkModel.find();

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
// book-mark
export const addToBookMarkData = async (
  req: Request,
  res: Response
): Promise<Response> => {
  try {
    const { ID } = req.params;

    const getWebFile = await webModel.findById(ID);

    const getAll = await bookMarkModel.create({
      bookMark: getWebFile,
    });

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
