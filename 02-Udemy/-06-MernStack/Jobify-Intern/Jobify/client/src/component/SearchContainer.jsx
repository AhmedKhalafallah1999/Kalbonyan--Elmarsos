import FormRowSelect from "./FormRowSelect";
import FormRow from "./FormRow";
import Wrapper from "../assets/wrappers/DashboardFormPage";
import { Form, Link, useNavigation, useSubmit } from "react-router-dom";
import { JOB_STATUS, JOB_SORT_BY, JOB_TYPE } from "../../../utils/constants";
import { useAllJobsContext } from "../pages/AllJobs";
const SearchContainer = () => {
  const submit = useSubmit();
  const useContextAllJobs = useAllJobsContext();
  const { searchParams } = useContextAllJobs;
  console.log(searchParams);

  return (
    <Wrapper>
      <Form className="form">
        <h5 className="form-title">search form</h5>
        <div className="form-center">
          {/* search position */}

          <FormRow
            type="text"
            id="search"
            name="search"
            labelText="search"
            defaultValue={searchParams.search}
            onChange={(e) => {
              submit(e.currentTarget.form);
            }}
          />
          <FormRowSelect
            name="jobStatus"
            id="jobStatus"
            defaultValue={searchParams.jobStatus}
            list={["all", ...Object.values(JOB_STATUS)]}
            labelText="Job Status"
            onChange={(e) => {
              submit(e.currentTarget.form);
            }}
          />
          <FormRowSelect
            name="jobType"
            id="jobType"
            defaultValue={searchParams.jobType}
            list={["all", ...Object.values(JOB_TYPE)]}
            labelText="Job Type"
            onChange={(e) => {
              submit(e.currentTarget.form);
            }}
          />
          <FormRowSelect
            name="Sort"
            id="Sort"
            defaultValue={searchParams.Sort}
            list={Object.values(JOB_SORT_BY)}
            labelText="Sort"
            onChange={(e) => {
              submit(e.currentTarget.form);
            }}
          />
          <Link to="/dashboard/all-jobs" className="btn form-btn delete-btn">
            Reset Search Values
          </Link>
        </div>
      </Form>
    </Wrapper>
  );
};
export default SearchContainer;
