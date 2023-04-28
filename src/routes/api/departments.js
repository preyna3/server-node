/* eslint-disable prettier/prettier */
import { Router } from 'express'
/*import { getCompanies, getCompany, addCompany } from '../../models/companies' 
*/
import { getDepartments, getDepartment } from '../../models/departments'

const router = Router()

router.get('/', async (req, res) => {
  const departments = await getDepartments()
  res.send(departments)
})

router.get('/:id', async (req, res) => {
  const department = await getDepartments(req.params.id)
  if (department){
    res.send(department)
  } else {
    res.status(404).send({msg:'Department not found'})
  }
})
/*
router.post('/', async (req, res) => {
  const companyName = req.body.name
  if (companyName){
  const company = await addCompany(companyName)
  res.send(company)
  } else {
    res.status(400).send({msg:'company name is required'})
  }
})

router.post('/:id', async (req, res) => {
  const companyId = req.params.id
  const company = await getCompany(companyId)
  if (company) {
    const departmentName = req.body.name
    if (departmentName) {
      const department = await addDepartment(departmentName, companyId)
      res.send(department)
    } else {
    res.status(400).send({msg:'Department name is required'})
  }
} else {
  res.status(400).send({msg:'Company does not exist'})
}
})
*/
export default router
