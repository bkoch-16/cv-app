export default function Output({
  editToggle,
  name,
  email,
  phone,
  location,
  handleEdit,
  schoolOne,
  schoolTwo,
  schoolThree,
  jobOne,
  jobTwo,
  jobThree,
}) {
  if (!editToggle) {
    return (
      <>
        <h2>General Info</h2>
        <br />
        <span>{name}</span>
        <br />
        <span>{email}</span>
        <br />
        <span>{phone}</span>
        <br />
        <span>{location}</span>
        <br />

        <h2>School One</h2>
        <span>{schoolOne.schoolName}</span>
        <br />
        <span>{schoolOne.studyName}</span>
        <br />
        <span>{schoolOne.studyDate}</span>
        <h2>School Two</h2>
        <span>{schoolTwo.schoolName}</span>
        <br />
        <span>{schoolTwo.studyName}</span>
        <br />
        <span>{schoolTwo.studyDate}</span>
        <h2>School Three</h2>
        <span>{schoolThree.schoolName}</span>
        <br />
        <span>{schoolThree.studyName}</span>
        <br />
        <span>{schoolThree.studyDate}</span>
        <br />
        <h2>Job One</h2>
        <span>{jobOne.companyName}</span>
        <br />
        <span>{jobOne.jobName}</span>
        <br />
        <span>{jobOne.responsibilities[0]}</span>
        <br />
        <span>{jobOne.responsibilities[1]}</span>
        <br />
        <span>{jobOne.responsibilities[2]}</span>
        <br />
        <span>{jobOne.date}</span>
        <br />

        <h2>Job Two</h2>
        <span>{jobTwo.companyName}</span>
        <br />
        <span>{jobTwo.jobName}</span>
        <br />
        <span>{jobTwo.responsibilities[0]}</span>
        <br />
        <span>{jobTwo.responsibilities[1]}</span>
        <br />
        <span>{jobTwo.responsibilities[2]}</span>
        <br />
        <span>{jobTwo.date}</span>
        <br />

        <h2>Job Three</h2>
        <span>{jobThree.companyName}</span>
        <br />
        <span>{jobThree.jobName}</span>
        <br />
        <span>{jobThree.responsibilities[0]}</span>
        <br />
        <span>{jobThree.responsibilities[1]}</span>
        <br />
        <span>{jobThree.responsibilities[2]}</span>
        <br />
        <span>{jobThree.date}</span>
        <br />

        <button type="button" onClick={handleEdit}>
          Edit
        </button>
      </>
    );
  }
}
