export const imageUpload = async (img) => {
  const urlCloudinary =
    'https://api.cloudinary.com/v1_1/dprgtf3kb/image/upload';
  const formData = new FormData();
  formData.append('upload_preset', 'todos-practice-img');
  formData.append('file', img);
  formData.append('api_key', '278286526421888');
  formData.append('resource_type', 'image');
  formData.append('file', img);
  try {
    const response = await fetch(urlCloudinary, {
      method: 'POST',
      body: formData,
    });
    if (response.ok) {
      const cloudResp = await response.json();

      return cloudResp.secure_url;
    } else {
      throw await response.json();
    }
  } catch (err) {
    throw err;
  }
};
