/* ========

Create a file called ".evn.local" (this file will get ignored by git)
in the root of your folder containing: 

VITE_DW_BASE_URL='https://your-awesome-dw-website.com/' (replace with an actual URL)

========= */

export const baseUrl = import.meta.env.VITE_DW_BASE_URL;