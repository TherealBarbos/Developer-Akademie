import { Injectable, inject } from '@angular/core';
import { Note } from '../interfaces/note.interface';
import {
  Firestore,
  collectionData,
  collection,
  doc,
  onSnapshot,
  addDoc,
} from '@angular/fire/firestore';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class NoteListService {
  normalNotes: Note[] = [];
  trashNotes: Note[] = [];

  // items$;
  // items;

  unsubNote;
  unsubTrash;


  firestore: Firestore = inject(Firestore);

  constructor() {
    

    this.unsubNote = this.subNoteList();
    this.unsubTrash = this.subTrashList();

    // this.items$ = collectionData(this.getNotesRef());
    // this.items = this.items$.subscribe((list) => {
    //   list.forEach((element) => {
    //     console.log(element);
    //   });
    // } )


  }

  async addNote(item: {}) {
    await addDoc(this.getNotesRef(), item).catch(
      (err) => {console.error(err)}
    ).then(
      (docRef) => { console.log('added w. ID:', docRef?.id);}
    )
   

  }

  ngoOnDestroy() {
    this.unsubNote();
    this.unsubTrash();
    // this.items.unsubscribe();
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
