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
        <p>Hello Thomas,</p>
        <p>
            {firstname} {lastname} sent you a message !
        </p>
        <p>
            {message}
        </p>
    </div>
);