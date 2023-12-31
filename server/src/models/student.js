"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
  class Student extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      Student.hasMany(models.Assignment, {
        foreignKey: "assignment_name",
        as: "assignmentData",
      });
    }
  }
  Student.init(
    {
      class_id: DataTypes.STRING,
      student_name: DataTypes.STRING,
      phone: DataTypes.INTEGER,
      gender: DataTypes.STRING,
      birthday: DataTypes.DATEONLY,
      address: DataTypes.STRING,
      email: DataTypes.STRING,
    },
    {
      sequelize,
      modelName: "Student",
    }
  );
  return Student;
};
