// let students = require('../data/students');

// // Get all students
// exports.getStudents = (req, res) => {
//   res.json(students);
// };
// exports.getStudents = async (req, res) => {
//   try {
//     const students = await Student.find();
//     res.json(students);
//   } catch (err) {
//     res.status(500).json({ message: 'Server Error' });
//   }
// };

// // Get single student by ID
// exports.getStudentById = (req, res) => {
//   const student = students.find(s => s.id === parseInt(req.params.id));
//   if (!student) return res.status(404).json({ message: 'Student not found' });
//   res.json(student);
// };

// // Create a new student
// exports.addStudent = (req, res) => {
//   const { name, age, course } = req.body;
//   const newStudent = {
//     id:students[students.length - 1].id +1,
//     name,
//     age,
//     course
//   };
//   students.push(newStudent);
//   res.status(201).json(newStudent);
// };

// // Update student
// exports.updateStudent = (req, res) => {
//   const student = students.find(s => s.id === parseInt(req.params.id));
//   if (!student) return res.status(404).json({ message: 'Student not found' });

//   student.name = req.body.name || student.name;
//   student.age = req.body.age || student.age;
//   student.course = req.body.course || student.course;

//   res.json(student);
// };

// // Delete student
// exports.deleteStudent = (req, res) => {
//   students = students.filter(s => s.id !== parseInt(req.params.id));
//   res.json({ message: 'Student deleted' });
// };
const Student = require('../model/student');

// Get all students
exports.getStudents = async (req, res) => {
  try {
    const students = await Student.find();
    res.json(students);
  } catch (err) {
    res.status(500).json({ message: 'Server Error' });
  }
};

// Get student by ID
exports.getStudentById = async (req, res) => {
  try {
    const student = await Student.findById(req.params.id);
    if (!student) return res.status(404).json({ message: 'Student not found' });
    res.json(student);
  } catch (err) {
    res.status(500).json({ message: 'Server Error' });
  }
};

// Add new student
exports.addStudent = async (req, res) => {
  const { name, age, course } = req.body;
  try {
    const newStudent = new Student({ name, age, course });
    await newStudent.save();
    res.status(201).json(newStudent);
  } catch (err) {
    res.status(400).json({ message: err.message });
  }
};

// Update student
exports.updateStudent = async (req, res) => {
  try {
    const student = await Student.findById(req.params.id);
    if (!student) return res.status(404).json({ message: 'Student not found' });

    student.name = req.body.name || student.name;
    student.age = req.body.age || student.age;
    student.course = req.body.course || student.course;

    await student.save();
    res.json(student);
  } catch (err) {
    res.status(400).json({ message: err.message });
  }
};

// Delete student
exports.deleteStudent = async (req, res) => {
  try {
    const student = await Student.findByIdAndDelete(req.params.id);
    if (!student) return res.status(404).json({ message: 'Student not found' });

    res.json({ message: 'Student deleted' });
  } catch (err) {
    res.status(500).json({ message: 'Server Error' });
  }
};
