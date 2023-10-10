const  Common  = require('../Models/CommonModel');
const  Department  = require('../Models/DepartmentModel');
exports.getCommunesByDepartmentId = async (req, res) => {
  const departmentId = req.params.departmentId;
  try {
   const department = await Department.findById(departmentId);
    if (!department) {
      return res.status(404).json({ message: 'Département non trouvé' });
    }
   else{
    const commons = await  Common.find({ departments_id: departmentId });
    res.json(commons);
   }
  } catch (err) {
    console.error('Erreur lors de la récupération des communes :', err);
    res.status(500).json({ message: 'Erreur serveur' });
  }
};
