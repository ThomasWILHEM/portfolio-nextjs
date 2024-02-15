type Email = {
    firstname: string,
    lastname: string,
    email: string,
    message: string
}

export const EmailTemplate = ({
      firstname,
      lastname,
      message,
      email
  }: Email) => (
    <div>
        <p>New Message from {firstname} {lastname}</p>
        <p>
            Email: {email}
        </p>
        <p>
            {message}
        </p>
    </div>
);