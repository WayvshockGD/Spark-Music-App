require("dotenv").config();
let nextPluginPreval = require("next-plugin-preval/config");

/** @type {import('next').NextConfig} */
module.exports = nextPluginPreval()({
  reactStrictMode: true,
  poweredByHeader: true
})
