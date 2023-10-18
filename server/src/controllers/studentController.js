import * as authServices from "../services";
import { internalServerError, badRequest } from "../middlewares/handle_errors";
// import {} from "../helpers/joi_schema";
import joi from "joi";

export const getStudent = async (req, res) => {
  try {
    const response = await authServices.getStudent(req.query);
    return res.status(200).json(response);
  } catch (error) {
    console.log(error);
    // return internalServerError(res);
  }
};

// export const createAssignment = async (req, res) => {
//   try {
//     const { error } = joi
//       .object({
//         assignment_name,
//         start_date,
//         deadline,
//         of_class,
//         content_text,
//         assignmentIds,
//       })
//       .validate(req.body);
//     if (error) return badRequest(error.details[0].message, res);
//     const response = await authServices.createAssignment(req.body);
//     return res.status(200).json(response);
//   } catch (error) {
//     return internalServerError(res);
//   }
// };

// export const updateAssignment = async (req, res) => {
//   try {
//     const { error } = joi
//       .object({
//         assignmentId,
//       })
//       .validate({ assignmentId: req.body.assignmentId });

//     if (error) return badRequest(error.details[0].message, res);
//     const response = await authServices.updateAssignment(req.body);
//     return res.status(200).json(response);
//   } catch (error) {
//     return internalServerError(res);
//   }
// };
// export const deleteAssignment = async (req, res) => {
//   try {
//     const { error } = joi
//       .object({
//         assignmentIds,
//       })
//       .validate(req.query);

//     if (error) return badRequest(error.details[0].message, res);
//     const response = await authServices.deleteAssignment(
//       req.query.assignmentIds
//     );
//     return res.status(200).json(response);
//   } catch (error) {
//     console.log(error);
//     return internalServerError(res);
//   }
// };