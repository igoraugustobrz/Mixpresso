package br.com.mixpresso.mixpressoapi.controller;

import br.com.mixpresso.mixpressoapi.domain.usuario.UserDTO;
import br.com.mixpresso.mixpressoapi.domain.usuario.Usuario;
import jakarta.validation.Valid;
import org.springframework.http.ResponseEntity;
import org.springframework.transaction.annotation.Transactional;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
@RequestMapping("/sign-up")
public class UserController {



    @PostMapping("")
    @Transactional
    public ResponseEntity cadastrarUsuario(@RequestBody @Valid UserDTO dados) {
        var usuario = new Usuario(dados);

    }
}
