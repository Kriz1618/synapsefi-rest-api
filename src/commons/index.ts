
export const handleError = (error: any) => {
  if (error?.response?.data) {
    return error.response.data;
  } else if (error instanceof Error) {
    return { error: error.message };
  }

  return `Internal error - ${error}`;
};
