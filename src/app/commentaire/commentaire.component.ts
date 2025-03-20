import { Component, OnInit } from '@angular/core';
import { CommentaireService } from '../services/commentaire.service';

@Component({
  selector: 'app-commentaire',
  templateUrl: './commentaire.component.html',
})
export class CommentaireComponent implements OnInit {
  commentaires: any[] = [];

  constructor(private commentaireService: CommentaireService) {}

  ngOnInit() {
    this.commentaireService.getCommentaires().subscribe((data: any) => {
      this.commentaires = data;
    });
  }

  ajouter() {
    this.commentaireService.ajouterCommentaire('Nouveau commentaire', 1).subscribe(() => {
      alert('Commentaire ajouté !');
    });
  }
}
