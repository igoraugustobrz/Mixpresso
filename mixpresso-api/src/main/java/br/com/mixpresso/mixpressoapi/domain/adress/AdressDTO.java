package br.com.mixpresso.mixpressoapi.domain.adress;

import jakarta.validation.constraints.NotBlank;
import jakarta.validation.constraints.Pattern;

public record AdressDTO(
        @NotBlank(message = "O campo rua não pode estar em branco")
        String rua,
        @NotBlank(message = "O campo cidade não pode estar em branco")
        String cidade,
        @NotBlank(message = "O campo estado não pode estar em branco")
        String estado,
        @NotBlank(message = "O campo cep não pode estar em branco")
        @Pattern(regexp = "\\\\d{5}-\\\\d{3}")
        String cep
) {
}
