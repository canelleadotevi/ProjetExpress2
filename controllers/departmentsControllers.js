const  Department  = require('../Models/DepartmentModel');

exports.getAllDepartments = async (req, res) => {
  try {
    const departments = await Department.find();
    res.json(departments);
    console.log("Contrôleur appelé");

  } catch (err) {
    console.error('Erreur lors de la récupération des départements :', err);
    res.status(500).json({ message: 'Erreur serveur' });
  }
}

exports.createDepartment = async (req, res) => {
    try {
      const {_id , name } = req.body; 
      const newDepartment = new Department({ _id,name });
      await newDepartment.save();
  
      res.status(201).json({
        message: 'Département créé avec succès',
        department: newDepartment,
      });
    } catch (err) {
      console.error('Erreur lors de la création du département :', err);
      res.status(500).json({ message: 'Erreur serveur' });
    }
  };
  exports.updateDepartment = async (req,res) =>{
    const departmentId = req.params.departmentId;
    const UpdateData = req.body;
    try{
        const updateDepart = await Department.findOneAndUpdate(
            {_id : departmentId},
            {$set : UpdateData },
            {new : true}
        );
        if (! updateDepart ) {
            return res.status(404).json({ message: 'Département non trouvé' });
          }
          res.status(200).json({message: 'Departement mis à jour avec succès',
          updateDepart})
    }
    catch(err){
        console.error('Erreur lors de la mis à jour du département',err);
        res.status(500).json({message: 'Erreur serveur'});
    }
  }

exports.deleteDepartment = async (req,res) =>{
    const departmentId = req.params.departmentId;
    const department = Department.findById(departmentId )
    try{
        if(!department){
            res.status(404).json({
                message: " Le département n'a pas été trouvée"
            })
        }
        else{
            await Department.deleteOne({_id: departmentId})
            res.status(200).json({
                message: "Département supprimé avec succès"
            })
        }
    }
    catch(err){
        console.error("Erreur lors de la suppression du département",err);
        res.status(500).json({message: "Erreur du serveur "})
    }
}
 

