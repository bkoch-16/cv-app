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
        {(name || email || phone || location) && <h2>General Info</h2>}
        {name && (
          <>
            <span>{name}</span>
            <br />
          </>
        )}
        {email && (
          <>
            <span>{email}</span>
            <br />
          </>
        )}
        {phone && (
          <>
            <span>{phone}</span>
            <br />
          </>
        )}
        {location && (
          <>
            <span>{location}</span>
            <br />
          </>
        )}

        {(schoolOne.schoolName ||
          schoolOne.studyName ||
          schoolOne.studyDate) && <h2>School One</h2>}
        {schoolOne.schoolName && (
          <>
            <span>{schoolOne.schoolName}</span>
            <br />
          </>
        )}

        {schoolOne.studyName && (
          <>
            <span>{schoolOne.studyName}</span>
            <br />
          </>
        )}

        {schoolOne.studyDate && (
          <>
            <span>{schoolOne.studyDate}</span>
            <br />
          </>
        )}
        {(schoolTwo.schoolName ||
          schoolTwo.studyName ||
          schoolTwo.studyDate) && <h2>School Two</h2>}
        {schoolTwo.schoolName && (
          <>
            <span>{schoolTwo.schoolName}</span>
            <br />
          </>
        )}

        {schoolTwo.studyName && (
          <>
            <span>{schoolTwo.studyName}</span>
            <br />
          </>
        )}

        {schoolTwo.studyDate && (
          <>
            <span>{schoolTwo.studyDate}</span>
            <br />
          </>
        )}
        {(schoolThree.schoolName ||
          schoolThree.studyName ||
          schoolThree.studyDate) && <h2>School Three</h2>}
        {schoolThree.schoolName && (
          <>
            <span>{schoolThree.schoolName}</span>
            <br />
          </>
        )}

        {schoolThree.studyName && (
          <>
            <span>{schoolThree.studyName}</span>
            <br />
          </>
        )}

        {schoolThree.studyDate && (
          <>
            <span>{schoolThree.studyDate}</span>
            <br />
          </>
        )}

        {(jobOne.companyName ||
          jobOne.jobName ||
          jobOne.responsibilities[0] ||
          jobOne.responsibilities[1] ||
          jobOne.responsibilities[2] ||
          jobOne.date) && <h2>School One</h2>}
        {jobOne.companyName && (
          <>
            <span>{jobOne.companyName}</span>
            <br />
          </>
        )}

        {jobOne.jobName && (
          <>
            <span>{jobOne.jobName}</span>
            <br />
          </>
        )}

        {jobOne.responsibilities[0] && (
          <>
            <span>{jobOne.responsibilities[0]}</span>
            <br />
          </>
        )}

        {jobOne.responsibilities[1] && (
          <>
            <span>{jobOne.responsibilities[1]}</span>
            <br />
          </>
        )}

        {jobOne.responsibilities[2] && (
          <>
            <span>{jobOne.responsibilities[2]}</span>
            <br />
          </>
        )}

        {jobOne.date && (
          <>
            <span>{jobOne.date}</span>
            <br />
          </>
        )}

        {(jobTwo.companyName ||
          jobTwo.jobName ||
          jobTwo.responsibilities[0] ||
          jobTwo.responsibilities[1] ||
          jobTwo.responsibilities[2] ||
          jobTwo.date) && <h2>Job Two</h2>}
        {jobTwo.companyName && (
          <>
            <span>{jobTwo.companyName}</span>
            <br />
          </>
        )}

        {jobTwo.jobName && (
          <>
            <span>{jobTwo.jobName}</span>
            <br />
          </>
        )}

        {jobTwo.responsibilities[0] && (
          <>
            <span>{jobTwo.responsibilities[0]}</span>
            <br />
          </>
        )}

        {jobTwo.responsibilities[1] && (
          <>
            <span>{jobTwo.responsibilities[1]}</span>
            <br />
          </>
        )}

        {jobTwo.responsibilities[2] && (
          <>
            <span>{jobTwo.responsibilities[2]}</span>
            <br />
          </>
        )}

        {jobTwo.date && (
          <>
            <span>{jobTwo.date}</span>
            <br />
          </>
        )}

        {(jobThree.companyName ||
          jobThree.jobName ||
          jobThree.responsibilities[0] ||
          jobThree.responsibilities[1] ||
          jobThree.responsibilities[2] ||
          jobThree.date) && <h2>Job Three</h2>}
        {jobThree.companyName && (
          <>
            <span>{jobThree.companyName}</span>
            <br />
          </>
        )}

        {jobThree.jobName && (
          <>
            <span>{jobThree.jobName}</span>
            <br />
          </>
        )}

        {jobThree.responsibilities[0] && (
          <>
            <span>{jobThree.responsibilities[0]}</span>
            <br />
          </>
        )}

        {jobThree.responsibilities[1] && (
          <>
            <span>{jobThree.responsibilities[1]}</span>
            <br />
          </>
        )}

        {jobThree.responsibilities[2] && (
          <>
            <span>{jobThree.responsibilities[2]}</span>
            <br />
          </>
        )}

        {jobThree.date && (
          <>
            <span>{jobThree.date}</span>
            <br />
          </>
        )}

        <button type="button" onClick={handleEdit}>
          Edit
        </button>
      </>
    );
  }
}
