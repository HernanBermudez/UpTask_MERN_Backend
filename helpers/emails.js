import nodemailer from 'nodemailer'

export const emailRegistro = async (datos) =>{
    const {email, nombre, token} = datos

    const transport = nodemailer.createTransport({
        host: process.env.EMAIL_HOST,
        port: process.env.EMAIL_PORT,
        auth: {
          user: process.env.EMAIL_USER,
          pass: process.env.EMAIL_PASS
        }
      });

    // Info del mail
    const info = await transport.sendMail({
        from: '"UpTask - Administrador de Proyectos" <cuentas@uptask.com>',
        to: email,
        subject: "UpTask - Comprueba tu cuenta",
        text: "Hola! Comprueba tu cuenta en UpTask",
        html: `<p>Hola, ${nombre}. Comprueba tu cuenta en UpTask.</p>
        <p>Tu cuenta ya está casi lista, solo debes comprobarla en el siguiente enlace:
        <a href="${process.env.FRONTEND_URL}/confirmar/${token}">Comprobar cuenta</a>
        <p>Si no creaste una cuenta con nosotros, puedes ignorar este mensaje.</p>
        </p>`
    })
}

export const emailOlvidePassword = async (datos) =>{
  const {email, nombre, token} = datos

  const transport = nodemailer.createTransport({
      host: process.env.EMAIL_HOST,
      port: process.env.EMAIL_PORT,
      auth: {
        user: process.env.EMAIL_USER,
        pass: process.env.EMAIL_PASS
    }
    });

  // Info del mail
  const info = await transport.sendMail({
      from: '"UpTask - Administrador de Proyectos" <cuentas@uptask.com>',
      to: email,
      subject: "UpTask - Reestablece tu contraseña",
      text: "Reestablece tu contraseña",
      html: `<p>Hola, ${nombre}. Has solicitado reestablecer la contraseña de tu cuenta en UpTask.</p>
      <p>Sigue el siguiente enlace para generar la nueva contraseña:
      <a href="${process.env.FRONTEND_URL}/olvide-password/${token}">Reestablecer contraseña</a>
      <p>Si no solicitaste reestablecer tu contraseña, puedes ignorar este mensaje.</p>
      </p>`
  })
}