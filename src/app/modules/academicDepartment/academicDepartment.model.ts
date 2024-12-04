import { TAcademicDepartment } from './academicDepartment.interface';
import { model, Schema } from 'mongoose';

const academicDeparmentSchema = new Schema<TAcademicDepartment>(
  {
    name: {
      type: String,
      required: true,
      unique: true,
    },
    academicfaculty: {
        type: Schema.Types.ObjectId,
        rer: 'AcademicFaculty'
    }
  },
  {
    timestamps: true,
  },
);

export const AcademicDepartment = model<TAcademicDepartment>(
  'AcademicDepartment',
  academicDeparmentSchema,
);
