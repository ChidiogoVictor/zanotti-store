const imageTobase64 = async (image) => {
  const reader = new FileReader();
  reader.readAsDataURL(image);

  const data = await new Promise((resolve, reject) => {
    reader.onload = () => resolve(render.result);

    render.onerror = (error) => reject(error);
  });

  return data;
};

export default imageTobase64;
