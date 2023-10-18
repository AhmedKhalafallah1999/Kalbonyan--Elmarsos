import { FormRow } from "../component";
import Wrapper from "../assets/wrappers/DashboardFormPage";
import { useOutletContext } from "react-router-dom";
import { useNavigation, Form } from "react-router-dom";
import customFetch from "../utils/customFetch";
import { toast } from "react-toastify";
export const Action = async ({ request }) => {
  const formData = await request.formData();
  // const data = Object.fromEntries(formData);
  const file = formData.get("avatar");
  // console.log(file);
  if (file && file.size > 500000) {
    toast.error("Image size too large");
    return null;
  }
  try {
    await customFetch.patch("/users/update-user", formData);
    toast.success("Profile updated successfully");
  } catch (error) {
    toast.error(error?.response?.data?.msg);
  }
  return null;
};
const Profile = () => {
  const { user } = useOutletContext();
  const { name, lastName, email, location } = user;
  const navigate = useNavigation();
  const isSubmitting = navigate.state === "submitting";
  return (
    <Wrapper>
      <Form method="post" className="form" encType="multipart/form-data">
        <h4 className="form-title">profile</h4>
        <div className="form-center">
          <div className="form-row">
            <label htmlFor="image" className="form-label">
              Select an image file (max 0.5 MB):
            </label>
            <input
              type="file"
              id="avatar"
              name="avatar"
              className="form-input"
              accept="image/*"
            />
          </div>
          <FormRow
            type="text"
            name="name"
            labelText="Name"
            defaultValue={name}
          ></FormRow>
          <FormRow
            type="text"
            name="lastname"
            labelText="Last Name"
            defaultValue={lastName}
          ></FormRow>
          <FormRow
            type="email"
            name="email"
            labelText="Email"
            defaultValue={email}
          ></FormRow>
          <FormRow
            type="text"
            name="location"
            labelText="Location"
            defaultValue={location}
          ></FormRow>
          <button
            className="btn btn-block form-btn"
            type="submit"
            disabled={isSubmitting}
          >
            {isSubmitting ? "submutting..." : "submit"}
          </button>
        </div>
      </Form>
    </Wrapper>
  );
};
export default Profile;
