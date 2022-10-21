function generateCards(employee) {
  const template = `
            <div class="card m-2 shadow p-3 mb-5 bg-white rounded" style="width:18rem">
                <div class="card-body p-0">
                    <div class="bg-primary text-white px-3 py-2">
                        <h3 class="card-title">${employee.getName()}</h3>
                        <h5 class="card-title">${employee.getRole()}</h5>
                    </div>
                    <ul class="list-group m-3">
                        <li class="list-group-item">ID: ${employee.getId()}</li>
                        <li class="list-group-item">Email: ${employee.getEmail()}</li>
                        <li class="list-group-item">${checkRole(employee)}</li>
                    </ul>
                </div>
            </div>`;
  return template;
}

function checkRole(employee) {
  if (employee.role === 'Manager') {
    return employee.getOfficeNumber();
  } else if (employee.role === 'Intern') {
    return employee.getSchool();
  } else {
    return employee.getGithub();
  }
}
module.exports = generateCards;
