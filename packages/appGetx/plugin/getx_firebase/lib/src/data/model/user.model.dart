// class UserModel {
//   String? uid;
//   String? email;
//   String? username;
//   DateTime? createdAt;
//   bool? isEmailVerified;
//
//   UserModel(
//       {this.email,
//         this.createdAt,
//         this.isEmailVerified,
//         this.uid,
//         this.username});
//
//   factory UserModel.fromJson(Map<String, dynamic>? json) {
//     String uid = json!['uid'] ?? "";
//     String username = json['username'] ?? "";
//     String email = json['email'] ?? "";
//     return UserModel(email: email, uid: uid, username: username);
//   }
//
//   Map<String, dynamic> toJson() {
//     final Map<String, dynamic> data = new Map<String, dynamic>();
//     data['uid'] = this.uid;
//     data['username'] = this.username;
//     data['email'] = this.email;
//     data['createdAt'] = this.createdAt;
//     data['isEmailVerified'] = this.isEmailVerified;
//     return data;
//   }
// }
