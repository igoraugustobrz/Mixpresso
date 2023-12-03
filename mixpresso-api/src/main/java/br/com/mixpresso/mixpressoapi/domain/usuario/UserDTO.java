package br.com.mixpresso.mixpressoapi.domain.usuario;

import jakarta.validation.constraints.Email;
import jakarta.validation.constraints.NotBlank;
import jakarta.validation.constraints.Pattern;
import org.hibernate.validator.constraints.br.CPF;

public record UserDTO(
        @Pattern(regexp = "^[A-Z]+(.)*", message = "Campo nome deve iniciar com letra maiúscula")
        @NotBlank(message = "O campo nome não pode estar em branco")
        String nome,
        @Email(message = "Formato de e-mail inválido")
        @NotBlank(message = "O campo e-mail não pode estar em branco")
        String email,
        @CPF(message = "Formato de CPF inválido")
        @NotBlank(message = "O campo CPF não pode estar em branco")
        String cpf
) {


}
