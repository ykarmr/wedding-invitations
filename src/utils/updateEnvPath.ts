const updateEnvPath = (filename: string) => {
  const isProd = process.env.NODE_ENV === 'production';
  const prefixPath = isProd ? '/family-greeting' : '';

  return prefixPath + filename;
};

export default updateEnvPath;
