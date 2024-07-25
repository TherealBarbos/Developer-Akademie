import { Injectable, inject } from '@angular/core';
import { Note } from '../interfaces/note.interface';
import {
  Firestore,
  collectionData,
  collection,
  doc,
  onSnapshot,
  addDoc,
  updateDoc
} from '@angular/fire/firestore';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class NoteListService {
  normalNotes: Note[] = [];
  trashNotes: Note[] = [];



  unsubNote;
  unsubTrash;


  firestore: Firestore = inject(Firestore);

  constructor() {
  
    this.unsubNote = this.subNoteList();
    this.unsubTrash = this.subTrashList();

  }

  async updateNote(note: Note) {
    if(note.id) {
      let docRef = this.getSingelDocRef(this.getColIDFromNotes(note), note.id);
    await updateDoc(docRef, this.getCleanJason(note)).catch(
      (err) => {console.error(err)}
    );
  }

  }

  getCleanJason(note: Note):{} {
    return {
      type: note.type,
      title: note.title,
      content: note.content,
      marked: note.marked,
  }
}

  getColIDFromNotes(note: Note):string {
    if(note.type === "note") {
      return "notes";
    } else {
      return "trash";
    }
  }

  async addNote(item: Note) {
    await addDoc(this.getNotesRef(), item).catch(
      (err) => {console.error(err)}
    ).then(
      (docRef) => { console.log('added w. ID:', docRef?.id);}
    )
   

  }

  ngoOnDestroy() {
    this.unsubNote();
    this.unsubTrash();
  }

  subNoteList(){
   return onSnapshot(this.getNotesRef(), (list) => {
    this.normalNotes = [];
      list.forEach((element) => {
        this.normalNotes.push(this.setNoteObject(element.data(), element.id));
      });
    });
  }

  subTrashList(){
   return onSnapshot(this.getTrashRef(), (list) => {
    this.trashNotes = [];

      list.forEach((element) => {
        this.trashNotes.push(this.setNoteObject(element.data(), element.id));
      });
    });
  }

  setNoteObject(obj: any, id:string): Note {
    return{
    id: id,
    type: obj.type || "note",
    title: obj.title || "",
    content: obj.content || "",
    marked: obj.marked || false,
    }
  }


  getNotesRef() {
    return collection(this.firestore, 'notes');
  }

  getTrashRef() {
    return collection(this.firestore, 'trash');
  }

  getSingelDocRef(colID: string, docID: string) {
    return doc(collection(this.firestore, colID), docID);
  }
}
