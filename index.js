const isHermes = () => global.HermesInternal != null;

module.exports = isHermes;
