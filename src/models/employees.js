import db from '../helpers/db'

export const getEmployees = async (skip, take) =>
  db.employee.findMany({
    skip,
    take,
  })

export const getEmployee = async (id) =>
  db.employee.findUnique({ where: { employeeID: id } })

export const addEmployee = async (employeeData) =>
  db.employee.create({ data: { ...employeeData } })

export const updateEmployee = async (id, employeeData) => {
  const employee = await getEmployee(id)
  if (employee) {
    return db.employee.update({
      where: { employeeID: id },
      data: { ...employee, ...employeeData, updatedAt: new Date() },
    })
  }
  return null
}

export const deleteEmployee = async (id) =>
  db.employee.delete({ where: { employeeID: id } })
