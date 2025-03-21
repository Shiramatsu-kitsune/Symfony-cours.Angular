import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({ providedIn: 'root' })
export class CommentaireService {
  private apiUrl = 'http://localhost:8000/api/commentaires';

  constructor(private http: HttpClient) {}

  getCommentaires() {
    return this.http.get(this.apiUrl);
  }

  ajouterCommentaire(contenu: string, postId: number) {
    return this.http.post(this.apiUrl, {
      contenu: contenu,
      post_id: postId
    });
  }
  supprimerCommentaire(id: number) {
    return this.http.delete(`${this.apiUrl}/${id}`);
  }
  
}
