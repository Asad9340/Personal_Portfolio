import { useState } from 'react';
import { imgbbImageUpload } from '../../../api/utils/imageUpload';
import Swal from 'sweetalert2';
import { useNavigate } from 'react-router-dom';
import { ImSpinner9 } from 'react-icons/im';

const AddBlog = () => {
  const [formErrors, setFormErrors] = useState({});
  const [image, setImage] = useState(null);
  const [title, setTitle] = useState('');
  const [content, setContent] = useState('');
  const [category, setCategory] = useState('');
  const [slug, setSlug] = useState('');
  const [status, setStatus] = useState('draft');
  const [isSubmitted, setIsSubmitted] = useState(false);
  const navigate = useNavigate();
  const [categories] = useState([
    'Technology',
    'Health',
    'Lifestyle',
    'Business',
    'Education',
    'Food',
    'Travel',
  ]);

  const handleImageChange = e => {
    const file = e.target.files[0];
    if (file) setImage(file);
  };

  const handleFormSubmit = async e => {
    e.preventDefault();
    const errors = {};

    if (!title) errors.title = 'Title is required';
    if (!content) errors.content = 'Content is required';
    if (!category) errors.category = 'Category is required';
    if (!slug) errors.slug = 'Slug is required';
    if (!image) errors.image = 'Image is required';

    if (Object.keys(errors).length > 0) {
      setFormErrors(errors);
      return;
    }

    setFormErrors({});
    setIsSubmitted(true);
    const imageUrl = await imgbbImageUpload(image);
    const formData = {
      Title: title,
      Content: content,
      Category: category,
      Slug: slug,
      Status: status,
      Image: imageUrl,
      CreatedAt: new Date().toISOString(),
    };

    if (imageUrl) {
      try {
        const response = await fetch(
          'https://portfolio-server-sigma-mocha.vercel.app/add-blog',
          {
            method: 'POST',
            headers: {
              'content-type': 'application/json',
            },
            body: JSON.stringify(formData),
          }
        );

        if (response.ok) {
          const data = await response.json();
          if (data.insertedId) {
            Swal.fire({
              title: 'Success!',
              text: 'Blog added successfully',
              icon: 'success',
              confirmButtonText: 'OK',
            });
            setIsSubmitted(false);
            navigate('/');
            // Reset form after successful submission
            e.target.reset();
            setTitle('');
            setContent('');
            setCategory('');
            setSlug('');
            setStatus('draft');
            setImage(null);
          }
        } else {
          Swal.fire({
            icon: 'error',
            title: 'Oops...',
            text: 'Something went wrong!',
          });
        }
      } catch (error) {
        console.error('Error in submission:', error);
      }
    }
  };

  return (
    <div className="min-h-screen py-10 px-6 font-lexend">
      <form
        onSubmit={handleFormSubmit}
        className="bg-white rounded-lg shadow-lg p-6 max-w-4xl mx-auto"
      >
        <h1 className="text-3xl font-bold text-gray-800 mb-6 text-center ">
          Add Blog
        </h1>
        <div className="space-y-4">
          <div className="w-full flex flex-col md:flex-row gap-4">
            <div className="w-full">
              <label
                className="block text-sm font-medium text-gray-700"
                htmlFor="title"
              >
                Blog Title
              </label>
              <input
                className={`w-full bg-gray-100 text-gray-900 p-3 rounded-lg focus:outline-none focus:shadow-outline ${
                  formErrors.title ? 'border-red-500' : ''
                }`}
                type="text"
                name="title"
                placeholder="Blog Title"
                value={title}
                onChange={e => setTitle(e.target.value)}
              />
              {formErrors.title && (
                <p className="text-red-500 text-sm">{formErrors.title}</p>
              )}
            </div>
          </div>

          <div>
            <label
              className="block text-sm font-medium text-gray-700"
              htmlFor="content"
            >
              Blog Description
            </label>
            <textarea
              className={`w-full bg-gray-100 text-gray-900 p-3 rounded-lg focus:outline-none focus:shadow-outline ${
                formErrors.content ? 'border-red-500' : ''
              }`}
              rows="4"
              name="content"
              placeholder="Blog Content"
              value={content}
              onChange={e => setContent(e.target.value)}
            ></textarea>
            {formErrors.content && (
              <p className="text-red-500 text-sm">{formErrors.content}</p>
            )}
          </div>

          <div>
            <label
              className="block text-sm font-medium text-gray-700"
              htmlFor="blogCategory"
            >
              Blog Category
            </label>
            <select
              className={`w-full bg-gray-100 text-gray-900 p-3 rounded-lg focus:outline-none focus:shadow-outline ${
                formErrors.category ? 'border-red-500' : ''
              }`}
              value={category}
              onChange={e => setCategory(e.target.value)}
            >
              <option value="">Select Category</option>
              {categories.map((cat, index) => (
                <option key={index} value={cat}>
                  {cat}
                </option>
              ))}
            </select>
            {formErrors.category && (
              <p className="text-red-500 text-sm">{formErrors.category}</p>
            )}
          </div>

          <div>
            <label
              className="block text-sm font-medium text-gray-700"
              htmlFor="slug"
            >
              Slug URL (Reference URL)
            </label>
            <input
              className={`w-full bg-gray-100 text-gray-900 p-3 rounded-lg focus:outline-none focus:shadow-outline ${
                formErrors.slug ? 'border-red-500' : ''
              }`}
              type="text"
              name="slug"
              placeholder="Slug URL"
              value={slug}
              onChange={e => setSlug(e.target.value)}
            />
            {formErrors.slug && (
              <p className="text-red-500 text-sm">{formErrors.slug}</p>
            )}
          </div>

          <div>
            <label
              className="block text-sm font-medium text-gray-700"
              htmlFor="image"
            >
              Blog Image
            </label>
            <input
              className="w-full bg-gray-100 text-gray-900 p-3 rounded-lg focus:outline-none focus:shadow-outline"
              type="file"
              name="image"
              accept="image/*"
              onChange={handleImageChange}
            />
            {formErrors.image && (
              <p className="text-red-500 text-sm">{formErrors.image}</p>
            )}
          </div>

          <div>
            <label
              className="block text-sm font-medium text-gray-700"
              htmlFor="status"
            >
              Blog Status
            </label>
            <div className="flex gap-4">
              <label className="w-1/2 text-center py-2 cursor-pointer border-2 rounded-lg border-gray-200 bg-gray-100 hover:bg-indigo-100 focus-within:bg-indigo-100 transition-colors">
                <input
                  className="hidden"
                  type="radio"
                  name="status"
                  value="Draft"
                  checked={status === 'Draft'}
                  onChange={() => setStatus('Draft')}
                />
                Draft
              </label>
              <label className="w-1/2 text-center py-2 cursor-pointer border-2 rounded-lg border-gray-200 bg-gray-100 hover:bg-indigo-100 focus-within:bg-indigo-100 transition-colors">
                <input
                  className="hidden"
                  type="radio"
                  name="status"
                  value="Publish"
                  checked={status === 'Publish'}
                  onChange={() => setStatus('Publish')}
                />
                Publish
              </label>
            </div>
          </div>

          <div className="flex justify-center mt-8">
            <button
              className={`bg-[#010127] text-white px-8 py-4 rounded-lg hover:bg-opacity-90 w-full flex justify-center ${
                isSubmitted ? 'opacity-50 cursor-not-allowed' : ''
              }`}
              type="submit"
            >
              {isSubmitted ? (
                <ImSpinner9 className="animate-spin" />
              ) : (
                'Add Blog'
              )}
            </button>
          </div>
        </div>
      </form>
    </div>
  );
};

export default AddBlog;
