/**
 * @description Validate new job request body
 * @param {{title: string, technologies: string, budget: number, description: string, contactEmail: string}} data 
 */
const validateJobInput = (data) => {
  const errors = {};

  if (!data.title)
    errors.title = "Please add a title";
  else if (data.title.length > 200)
    errors.title = "Title should be less than 200 characters";

  if (!data.technologies)
    errors.technologies = "Please add a technologies";
  else if (data.technologies.length > 200)
    errors.technologies = "Technologies should be less than 200 characters";

  if (!data.budget)
    errors.budget = "Please add a budget";
  else if (data.budget.toString().length > 200)
    errors.budget = "budget should be less than 200 characters";

  if (!data.description)
    errors.description = "Please add a description";

  if (!data.contactEmail)
    errors.contactEmail = "Please add a Contact Email";
  else if (data.contactEmail.length > 200)
    errors.contactEmail = "Contact Email should be less than 200 characters";

  return {
    isValid: Object.keys(errors).length === 0,
    errors
  };
};

module.exports = { validateJobInput };