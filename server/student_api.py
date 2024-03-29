from flask import Blueprint, jsonify, request, current_app as app
from .db import studentDao 
from .models import student, complaint
from flask_jwt_extended import get_jwt_identity, jwt_required
import json

api = Blueprint('stdApi', 'backEnd', url_prefix= '/api/student')

@api.route('/getcomplaints', methods = ['GET'])
@jwt_required()
def getComplaints():
    return app.student.jsonObj()

@api.route('/getdescriptions', methods = ['POST'])
@jwt_required()
def getDescriptions():
    id = request.json['complaint_id']
    res = app.student.getComplaintDetails(id)
    if res:
        return res, 200
    else:
        return jsonify({"message": "No complaint found"}), 400

@api.route('/addcomplaint', methods = ['GET','POST'])
@jwt_required()
def addComplaint():
    st = studentDao()
    if request.method == 'GET':
        departments = st.getDepartments()
        del st
        return jsonify(departments), 200 

    userId = get_jwt_identity()
    data = request.get_json()
    c = complaint(None, data['title'], data['description'], "pending", None,'', -1, data['depId'], userId, None) 
    st.addComplaint(c)
    app.student.addComplaint(c)
    del st
    return jsonify({'message': 'Complaint added successfully'}) , 200

@api.route('/editcomplaint', methods = ['POST'])  
@jwt_required()
def editComplaint():
    id = get_jwt_identity()
    st = studentDao()
    data = request.get_json()
    edited = app.student.editComplaint(data['complaint_id'], data['description']) 
    if edited:
        st.updateComplaint(data['complaint_id'], data['description'])
        del st
        return jsonify({'message': 'Complaint edited successfully'}), 200
    else:
        del st
        return jsonify({'message': 'Error editing complaint'}), 400

@api.route('/resubmitcomplaint', methods = ['POST'])
@jwt_required()
def resubmitComplaint():
    data = request.get_json()
    complaint_id = data['complaint_id']
    comment = data['comment']
    if(app.student.resubmitComplaint(complaint_id, comment)):
        st = studentDao()
        st.resubmitComplaint(complaint_id, comment)
        del st
        return jsonify({'message': 'Feedback given successfully'}), 200

    return jsonify({'message': 'Error giving feedback, can not find complaint'}), 400


def deleteComplaint(id, st):
    depId= app.student.deleteComplaint(id)
    if depId:
        st.deleteComplaint(id)
    
    return depId

    
@api.route('/deletecomplaint', methods = ['POST'])
@jwt_required()
def delete():
    id = get_jwt_identity()
    cmpId = request.get_json()['id']
    st = studentDao()
    deleted = deleteComplaint(cmpId, st)
    del st
    if deleted:
        return jsonify({'message': 'Complaint deleted successfully'}), 200
    else:
        return jsonify({'message': 'Error deleting complaint'}), 400

@api.route('/rate', methods = ['POST'])
@jwt_required()
def rate():
    id = get_jwt_identity()
    cmpId = request.get_json()['id']
    st = studentDao()
    depId = deleteComplaint(cmpId, st)
    if not depId: 
        return jsonify({'message': 'Error could not find deparment'}), 400
    data = request.get_json()
    st.rateDepartment(depId, data['stars'])
    del st
    return jsonify({'message': 'Department rated and complaint deleted successfully'}), 200
