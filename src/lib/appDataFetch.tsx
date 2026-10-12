const getData = async () => {
  try {
 const res = await fetch(`${process.env.NEXT_PUBLIC_SERVER_BASE_URL}/data.json`);
  const data = await res.json();
  return data;
  } catch (error) {
    console.error("Error fetching data:", error);
    return []; // Return an empty array or handle the error as needed
  }
}

export default getData;