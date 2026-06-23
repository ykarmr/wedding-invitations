const updateEnvPath = (filename: string) => {
  const isProd = process.env.NODE_ENV === "production";
  const prefixPath = isProd ? "/wedding-invitations" : "";

  return prefixPath + filename;
};

export default updateEnvPath;
