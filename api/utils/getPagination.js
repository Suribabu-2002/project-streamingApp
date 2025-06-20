const getPagination = (req) => {
  const page =
    parseInt(req.query.pageNumber) > 0 ? parseInt(req.query.pageNumber) : 1;
  const limit =
    parseInt(req.query.pageSize) > 0 ? parseInt(req.query.pageSize) : 10;
  const skip = (page - 1) * limit;

  return { page, limit, skip };
};

export default getPagination;
