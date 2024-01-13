package br.com.mixpresso.mixpressoapi.domain.adress;

import br.com.mixpresso.mixpressoapi.domain.user.User;
import jakarta.persistence.*;
import lombok.AllArgsConstructor;
import lombok.EqualsAndHashCode;
import lombok.Getter;
import lombok.NoArgsConstructor;

@Table(name = "endereco")
@Entity(name = "Endereco")
@Getter
@NoArgsConstructor
@AllArgsConstructor
@EqualsAndHashCode(of = "id")
public class Adress {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id_endereco;

    @JoinColumn(name = "id_usuario")
    @OneToOne
    private User id_usuario;

    private String rua;
    private String cidade;
    private String estado;
    private String cep;

    public Adress(AdressDTO dados) {
        this.rua = dados.rua();
        this.cidade = dados.cidade();
        this.estado = dados.estado();
        this.cep = dados.cep();
    }

    public void atualizarInformacoes(AdressDTO dados) {
        if (dados.rua() != null) {
            this.rua = dados.rua();
        }

        if (dados.cidade() != null) {
            this.cidade = dados.cidade();
        }

        if (dados.estado() != null) {
            this.estado = dados.estado();
        }

        if (dados.cep() != null) {
            this.cep = dados.cep();
        }
    }
}
