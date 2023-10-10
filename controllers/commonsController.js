const Common = require("../Models/CommonModel");
const Department = require("../Models/DepartmentModel");
exports.getAllCommons = async (req, res) => {
  try {
    const commons = await Common.find();
    res.json(commons);
    console.log("Contrôleur appelé");
  } catch (err) {
    console.error("Erreur lors de la récupération des départements :", err);
    res.status(500).json({ message: "Erreur serveur" });
  }
};
exports.getAllCommonsOfDepartments = async (req, res) => {
  try {
    const commons = await Common.find();
    res.json(commons);
  } catch (err) {
    console.error("Erreur lors de la récupération des départements :", err);
    res.status(500).json({ message: "Erreur serveur" });
  }
};



exports.createCommune = async (req, res) => {
    try {
      const { _id, name, departments_id } = req.body;
      const department = await Department.findById(departments_id);
  
      if (!department) {
        return res.status(404).json({ message: 'Département non trouvé' });
      }
  
      const newCommune = new Common({_id, name, departments_id });
  
      await newCommune.save();
  
      res.status(201).json({
        message: 'Commune créée avec succès',
        commune: newCommune,
      });
    } catch (err) {
      console.error('Erreur lors de la création de la commune :', err);
      res.status(500).json({ message: 'Erreur serveur' });
    }
  };
  exports.updateCommune = async (req,res) =>{
    const CommonId = req.params.commonId;
    const UpdateData = req.body;
    try{
        const  updateCommon = await Common.findOneAndUpdate(
            {_id : CommonId},
            {$set : UpdateData },
            {new : true}
        );
        if (! updateCommon ) {
            return res.status(404).json({ message: 'Commune non trouvé' });
          }
          res.status(200).json({message: 'Commune mis à jour avec succès',
          updateCommon})
    }
    catch(err){
        console.error('Erreur lors de la mis à jour du Commune',err);
        res.status(500).json({message: 'Erreur serveur'});
    }
  }

  exports.deleteCommon = async (req,res) =>{
    const commonId= req.params.commonId;
    const common = Common.findById(commonId)
    try{
        if(!common){
            res.status(404).json({
                message: " La commune n'a pas été trouvée"
            })
        }
        else{
            await Common.deleteOne({_id: commonId})
            res.status(200).json({
                message: "Commune supprimé avec succès"
            })
        }
    }
    catch(err){
        console.error("Erreur lors de la suppression de la commune",err);
        res.status(500).json({message: "Erreur du serveur "})
    }
}

  