import { Request, Response } from 'express';
import * as Categories from '../services/categories.service';

export function GetAllCategories() {
  return async (req: Request, res: Response) => {
    try {
      const categories = await Categories.GetAll();
      console.log(categories);
      return res.json(categories);
    } catch (e) {
      console.log(e);
      return res
        .status(500)
        .json({ statusCode: '500', message: 'something went wrong' });
    }
  };
}

export function AddCategories() {
  return async (req: Request, res: Response) => {
    try {
      const created = await Categories.AddCate(req.body);
      return res
        .status(201)
        .json({ success: true, message: 'created have been successfully' });
    } catch (e) {
      console.log(e);
      return res
        .status(500)
        .json({ statusCode: '500', message: 'something went wrong' });
    }
  };
}