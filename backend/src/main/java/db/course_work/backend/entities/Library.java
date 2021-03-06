package db.course_work.backend.entities;

import lombok.*;

import javax.persistence.*;

@Entity
@Getter
@Setter
@NoArgsConstructor
@PrimaryKeyJoinColumn(name = "id")
public class Library extends Premise {
    @OneToOne
    @JoinColumn(name = "synagogue_id")
    @Setter(AccessLevel.NONE)
    private Synagogue housedInSynagogue;

    public void setHousedInSynagogue(Synagogue housedInSynagogue) {
        this.housedInSynagogue = housedInSynagogue;
        super.setSynagogue(housedInSynagogue);
    }
}
